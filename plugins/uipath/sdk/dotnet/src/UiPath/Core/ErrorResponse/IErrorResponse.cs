using System.Threading;
using System.Threading.Tasks;
using UiPath.Core.Models;

namespace UiPath.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
