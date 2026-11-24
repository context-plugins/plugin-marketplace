using System.Threading;
using System.Threading.Tasks;
using Surfe.Core.Models;

namespace Surfe.Core.Response;

internal sealed class ErrorByteResponse : IResponse<ErrorByteContent>
{
    public static ErrorByteResponse Instance { get; } = new();

    private ErrorByteResponse()
    {
    }

    public async ValueTask<ErrorByteContent> Map(ResponseContext context, CancellationToken cancellationToken)
    {
        using (context.Response)
        {
#if NET6_0_OR_GREATER
            var bytes = await context.Response.Content.ReadAsByteArrayAsync(cancellationToken).ConfigureAwait(false);
#else
            var bytes = await context.Response.Content.ReadAsByteArrayAsync().ConfigureAwait(false);
#endif
            return new ErrorByteContent
            {
                Bytes = bytes,
                FileName = context.Response.Content.Headers.ContentDisposition?.FileNameStar ??
                           context.Response.Content.Headers.ContentDisposition?.FileName,
                ContentType = context.Response.Content.Headers.ContentType
            };
        }
    }
}
