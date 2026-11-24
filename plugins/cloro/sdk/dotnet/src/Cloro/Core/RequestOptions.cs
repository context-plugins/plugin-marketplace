using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Cloro.Core.Hooks;
using Cloro.Core.Models;

namespace Cloro.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
