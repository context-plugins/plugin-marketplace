using System.Threading;
using System.Threading.Tasks;
using Clix.Core.Models;

namespace Clix.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
