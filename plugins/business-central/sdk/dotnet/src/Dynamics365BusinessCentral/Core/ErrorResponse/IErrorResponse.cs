using System.Threading;
using System.Threading.Tasks;
using Dynamics365BusinessCentral.Core.Models;

namespace Dynamics365BusinessCentral.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
