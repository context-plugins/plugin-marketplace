using System.Threading;
using System.Threading.Tasks;
using CodeQr.Core.Models;

namespace CodeQr.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
