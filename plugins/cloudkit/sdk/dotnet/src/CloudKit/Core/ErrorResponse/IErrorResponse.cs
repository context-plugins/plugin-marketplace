using System.Threading;
using System.Threading.Tasks;
using CloudKit.Core.Models;

namespace CloudKit.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
