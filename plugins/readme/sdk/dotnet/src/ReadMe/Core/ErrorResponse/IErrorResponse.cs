using System.Threading;
using System.Threading.Tasks;
using ReadMe.Core.Models;

namespace ReadMe.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
