using System.Threading;
using System.Threading.Tasks;
using Apibara.Core.Models;

namespace Apibara.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
