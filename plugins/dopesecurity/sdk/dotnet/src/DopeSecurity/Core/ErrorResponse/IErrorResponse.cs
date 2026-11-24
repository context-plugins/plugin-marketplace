using System.Threading;
using System.Threading.Tasks;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
