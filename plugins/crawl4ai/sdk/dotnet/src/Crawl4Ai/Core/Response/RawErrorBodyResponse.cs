using System.Threading;
using System.Threading.Tasks;
using Crawl4Ai.Core.ErrorResponse;
using Crawl4Ai.Core.Models;

namespace Crawl4Ai.Core.Response;

internal sealed class RawErrorBodyResponse : IResponse<RawError>
{
    public static RawErrorBodyResponse Instance { get; } = new();

    private RawErrorBodyResponse() { }

    public ValueTask<RawError> Map(ResponseContext context, CancellationToken cancellationToken) =>
        new(RawError.Create(context.Response, cancellationToken));
}
