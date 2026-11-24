using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Clix.Core.Hooks;
using Clix.Core.Models;

namespace Clix.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
