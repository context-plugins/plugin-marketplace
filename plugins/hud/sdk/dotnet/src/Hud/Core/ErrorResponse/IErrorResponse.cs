using System.Threading;
using System.Threading.Tasks;
using Hud.Core.Models;

namespace Hud.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
