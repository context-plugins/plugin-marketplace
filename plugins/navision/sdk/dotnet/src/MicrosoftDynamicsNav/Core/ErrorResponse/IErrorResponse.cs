using System.Threading;
using System.Threading.Tasks;
using MicrosoftDynamicsNav.Core.Models;

namespace MicrosoftDynamicsNav.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
