using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using GoogleCloudSpeechToText.Core.Hooks;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
