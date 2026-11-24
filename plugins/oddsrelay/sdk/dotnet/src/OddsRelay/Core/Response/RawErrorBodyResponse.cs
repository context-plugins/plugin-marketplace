using System.Threading;
using System.Threading.Tasks;
using OddsRelay.Core.ErrorResponse;
using OddsRelay.Core.Models;

namespace OddsRelay.Core.Response;

internal sealed class RawErrorBodyResponse : IResponse<RawError>
{
    public static RawErrorBodyResponse Instance { get; } = new();

    private RawErrorBodyResponse() { }

    public ValueTask<RawError> Map(ResponseContext context, CancellationToken cancellationToken) =>
        new(RawError.Create(context.Response, cancellationToken));
}
