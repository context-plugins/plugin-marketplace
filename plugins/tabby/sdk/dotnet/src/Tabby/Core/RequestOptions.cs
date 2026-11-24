using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Tabby.Core.Hooks;
using Tabby.Core.Models;

namespace Tabby.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
