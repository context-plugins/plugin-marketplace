using System.Threading;
using System.Threading.Tasks;
using Justtrack.Core.Models;

namespace Justtrack.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
