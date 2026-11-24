using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using CommonElements.Core.Hooks;
using CommonElements.Core.Models;

namespace CommonElements.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
