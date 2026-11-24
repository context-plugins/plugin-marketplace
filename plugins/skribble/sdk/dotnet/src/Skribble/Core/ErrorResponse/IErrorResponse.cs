using System.Threading;
using System.Threading.Tasks;
using Skribble.Core.Models;

namespace Skribble.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
