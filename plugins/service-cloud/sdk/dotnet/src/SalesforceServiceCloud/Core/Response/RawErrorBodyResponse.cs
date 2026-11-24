using System.Threading;
using System.Threading.Tasks;
using SalesforceServiceCloud.Core.ErrorResponse;
using SalesforceServiceCloud.Core.Models;

namespace SalesforceServiceCloud.Core.Response;

internal sealed class RawErrorBodyResponse : IResponse<RawError>
{
    public static RawErrorBodyResponse Instance { get; } = new();

    private RawErrorBodyResponse() { }

    public ValueTask<RawError> Map(ResponseContext context, CancellationToken cancellationToken) =>
        new(RawError.Create(context.Response, cancellationToken));
}
