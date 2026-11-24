using System.Threading;
using System.Threading.Tasks;
using Bitbucket.Core.Models;

namespace Bitbucket.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
