using System.Threading;
using System.Threading.Tasks;
using GoogleCloudApiGateway.Core.ErrorResponse;
using GoogleCloudApiGateway.Core.Models;

namespace GoogleCloudApiGateway.Core.Response;

internal sealed class RawErrorBodyResponse : IResponse<RawError>
{
    public static RawErrorBodyResponse Instance { get; } = new();

    private RawErrorBodyResponse() { }

    public ValueTask<RawError> Map(ResponseContext context, CancellationToken cancellationToken) =>
        new(RawError.Create(context.Response, cancellationToken));
}
