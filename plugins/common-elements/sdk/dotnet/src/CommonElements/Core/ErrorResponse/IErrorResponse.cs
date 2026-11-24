using System.Threading;
using System.Threading.Tasks;
using CommonElements.Core.Models;

namespace CommonElements.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
