using System.Threading;
using System.Threading.Tasks;
using Shortcut.Core.Models;

namespace Shortcut.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
