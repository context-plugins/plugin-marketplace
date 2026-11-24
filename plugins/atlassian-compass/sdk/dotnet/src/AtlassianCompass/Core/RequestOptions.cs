using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using AtlassianCompass.Core.Hooks;
using AtlassianCompass.Core.Models;

namespace AtlassianCompass.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
