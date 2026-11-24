using System.Threading;
using System.Threading.Tasks;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
