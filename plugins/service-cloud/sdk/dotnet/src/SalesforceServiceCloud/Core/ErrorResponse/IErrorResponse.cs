using System.Threading;
using System.Threading.Tasks;
using SalesforceServiceCloud.Core.Models;

namespace SalesforceServiceCloud.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
