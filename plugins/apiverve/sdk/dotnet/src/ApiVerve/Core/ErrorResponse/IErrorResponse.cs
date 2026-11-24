using System.Threading;
using System.Threading.Tasks;
using ApiVerve.Core.Models;

namespace ApiVerve.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
