using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;
using Bill.Core.Models;

namespace Bill.Core.Response;

internal sealed class BinaryResponse : IResponse<BinaryContent>
{
    public static BinaryResponse Instance { get; } = new();

    private BinaryResponse()
    {
    }

    public async ValueTask<BinaryContent> Map(ResponseContext context, CancellationToken cancellationToken)
    {
#if NET6_0_OR_GREATER
        var responseStream = await context.Response.Content.ReadAsStreamAsync(cancellationToken).ConfigureAwait(false);
#else
        var responseStream = await context.Response.Content.ReadAsStreamAsync().ConfigureAwait(false);
#endif
        return new BinaryContent
        {
            Stream = responseStream,
            FileName = context.Response.Content.Headers.ContentDisposition?.FileNameStar ??
                       context.Response.Content.Headers.ContentDisposition?.FileName,
            ContentType = context.Response.Content.Headers.ContentType ??
                          new MediaTypeHeaderValue("application/octet-stream")
        };
    }
}
