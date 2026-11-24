using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Net.Http;
using System.Net.ServerSentEvents;
using System.Runtime.CompilerServices;
using System.Threading;
using System.Threading.Tasks;
using GoogleCloudStorageTransferService.Core.Exceptions;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Core.Response;

internal static class SseFrameReader
{
    public static async IAsyncEnumerable<byte[]> EnumerateFrames(
        ResponseContext context,
        byte[]? sentinelBytes,
        [EnumeratorCancellation] CancellationToken cancellationToken)
    {
        using (context.Response)
        {
#if NET6_0_OR_GREATER
            var stream = await context.Response.Content.ReadAsStreamAsync(cancellationToken).ConfigureAwait(false);
#else
            var stream = await context.Response.Content.ReadAsStreamAsync().ConfigureAwait(false);
#endif

            var parser = SseParser.Create(stream, static (_, data) => data.ToArray());

            using var frameCts = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken);
            var enumerator = parser.EnumerateAsync(frameCts.Token).GetAsyncEnumerator(frameCts.Token);
            await using (enumerator.ConfigureAwait(false))
            {
                while (true)
                {
                    var moveNext = enumerator.MoveNextAsync();

                    bool hasNext;
                    try
                    {
                        if (context.StreamReadTimeout is not { } idleWindow || moveNext.IsCompleted)
                        {
                            hasNext = await moveNext.ConfigureAwait(false);
                        }
                        else
                        {
                            var moveNextTask = moveNext.AsTask();
                            using var timerCts = new CancellationTokenSource();
                            var idleDelay = context.Clock.Delay(idleWindow, timerCts.Token);

                            var winner = await Task.WhenAny(moveNextTask, idleDelay).ConfigureAwait(false);
                            if (winner == idleDelay && !moveNextTask.IsCompleted)
                            {
                                frameCts.Cancel();
                                context.Response.Dispose();
                                try
                                {
                                    await moveNextTask.ConfigureAwait(false);
                                }
                                catch (Exception)
                                {
                                    // The read we just canceled — its outcome is irrelevant; we are
                                    // reporting the timeout instead.
                                }

                                throw SdkTimeoutException.For(context.Call, idleWindow,
                                    $"{context.Call} received no Server-Sent Events frame within {idleWindow.TotalSeconds.ToString(CultureInfo.InvariantCulture)} s.");
                            }

                            timerCts.Cancel();
                            hasNext = await moveNextTask.ConfigureAwait(false);
                        }
                    }
                    catch (Exception ex) when (ex is HttpRequestException or IOException)
                    {
                        throw new SdkConnectionException($"{context.Call} could not read the response body: {ex.Message}", ex)
                        {
                            Method = context.Call.Method,
                            RequestUri = context.Call.RequestUri,
                        };
                    }

                    if (!hasNext)
                        yield break;

                    var data = enumerator.Current.Data;
                    if (IsSentinel(data, sentinelBytes))
                        yield break;

                    yield return data;
                }
            }
        }
    }

    private static bool IsSentinel(byte[] frame, byte[]? sentinel) =>
        sentinel is not null && frame.AsSpan().SequenceEqual(sentinel);
}
