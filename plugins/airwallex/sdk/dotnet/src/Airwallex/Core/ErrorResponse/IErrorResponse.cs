using System.Threading;
using System.Threading.Tasks;
using Airwallex.Core.Models;

namespace Airwallex.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
