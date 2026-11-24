using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using AmazonTranscribe.Core.Hooks;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
