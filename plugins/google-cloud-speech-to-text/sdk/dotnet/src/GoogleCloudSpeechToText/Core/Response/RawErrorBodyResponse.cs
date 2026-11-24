using System.Threading;
using System.Threading.Tasks;
using GoogleCloudSpeechToText.Core.ErrorResponse;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText.Core.Response;

internal sealed class RawErrorBodyResponse : IResponse<RawError>
{
    public static RawErrorBodyResponse Instance { get; } = new();

    private RawErrorBodyResponse() { }

    public ValueTask<RawError> Map(ResponseContext context, CancellationToken cancellationToken) =>
        new(RawError.Create(context.Response, cancellationToken));
}
