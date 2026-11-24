using System.Threading;
using System.Threading.Tasks;
using DynamicFeed.Core.ErrorResponse;
using DynamicFeed.Core.Models;

namespace DynamicFeed.Core.Response;

internal sealed class RawErrorBodyResponse : IResponse<RawError>
{
    public static RawErrorBodyResponse Instance { get; } = new();

    private RawErrorBodyResponse() { }

    public ValueTask<RawError> Map(ResponseContext context, CancellationToken cancellationToken) =>
        new(RawError.Create(context.Response, cancellationToken));
}
