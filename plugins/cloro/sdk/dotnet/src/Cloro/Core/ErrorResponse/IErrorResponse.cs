using System.Threading;
using System.Threading.Tasks;
using Cloro.Core.Models;

namespace Cloro.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
