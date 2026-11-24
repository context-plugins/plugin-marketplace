using System.Threading;
using System.Threading.Tasks;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
