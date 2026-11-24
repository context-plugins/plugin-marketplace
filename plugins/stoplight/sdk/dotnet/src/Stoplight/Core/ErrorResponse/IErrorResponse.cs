using System.Threading;
using System.Threading.Tasks;
using Stoplight.Core.Models;

namespace Stoplight.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
