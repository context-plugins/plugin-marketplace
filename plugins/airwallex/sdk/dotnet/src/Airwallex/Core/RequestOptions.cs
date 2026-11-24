using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Airwallex.Core.Hooks;
using Airwallex.Core.Models;

namespace Airwallex.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
