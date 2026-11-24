using System.Threading;
using System.Threading.Tasks;
using FacebookBusinessManager.Core.Models;

namespace FacebookBusinessManager.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
