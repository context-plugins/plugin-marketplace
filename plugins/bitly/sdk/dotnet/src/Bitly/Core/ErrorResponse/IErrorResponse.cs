using System.Threading;
using System.Threading.Tasks;
using Bitly.Core.Models;

namespace Bitly.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
