using System.Threading;
using System.Threading.Tasks;
using Basiq.Core.Models;

namespace Basiq.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
