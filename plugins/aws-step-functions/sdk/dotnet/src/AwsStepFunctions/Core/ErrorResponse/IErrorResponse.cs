using System.Threading;
using System.Threading.Tasks;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
