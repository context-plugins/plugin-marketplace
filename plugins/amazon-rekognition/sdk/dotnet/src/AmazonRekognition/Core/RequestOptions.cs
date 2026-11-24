using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using AmazonRekognition.Core.Hooks;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
