using System.Threading;
using System.Threading.Tasks;
using Leadspace.Core.Models;

namespace Leadspace.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
