using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using GoogleTranslate.Core.Hooks;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
