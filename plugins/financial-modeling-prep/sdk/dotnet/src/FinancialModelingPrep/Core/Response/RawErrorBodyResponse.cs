using System.Threading;
using System.Threading.Tasks;
using FinancialModelingPrep.Core.ErrorResponse;
using FinancialModelingPrep.Core.Models;

namespace FinancialModelingPrep.Core.Response;

internal sealed class RawErrorBodyResponse : IResponse<RawError>
{
    public static RawErrorBodyResponse Instance { get; } = new();

    private RawErrorBodyResponse() { }

    public ValueTask<RawError> Map(ResponseContext context, CancellationToken cancellationToken) =>
        new(RawError.Create(context.Response, cancellationToken));
}
