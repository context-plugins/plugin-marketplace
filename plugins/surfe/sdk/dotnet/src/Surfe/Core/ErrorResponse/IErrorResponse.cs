using System.Threading;
using System.Threading.Tasks;
using Surfe.Core.Models;

namespace Surfe.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
