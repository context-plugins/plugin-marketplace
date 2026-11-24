using System.Threading;
using System.Threading.Tasks;
using FinancialModelingPrep.Core.Models;

namespace FinancialModelingPrep.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
