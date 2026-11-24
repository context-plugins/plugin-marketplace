using System.Threading;
using System.Threading.Tasks;
using Apigee.Core.Models;

namespace Apigee.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
