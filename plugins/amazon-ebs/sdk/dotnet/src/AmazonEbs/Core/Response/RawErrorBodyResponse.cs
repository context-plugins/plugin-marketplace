using System.Threading;
using System.Threading.Tasks;
using AmazonEbs.Core.ErrorResponse;
using AmazonEbs.Core.Models;

namespace AmazonEbs.Core.Response;

internal sealed class RawErrorBodyResponse : IResponse<RawError>
{
    public static RawErrorBodyResponse Instance { get; } = new();

    private RawErrorBodyResponse() { }

    public ValueTask<RawError> Map(ResponseContext context, CancellationToken cancellationToken) =>
        new(RawError.Create(context.Response, cancellationToken));
}
