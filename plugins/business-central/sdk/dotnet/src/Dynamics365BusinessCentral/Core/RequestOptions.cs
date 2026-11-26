using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Dynamics365BusinessCentral.Core.Hooks;
using Dynamics365BusinessCentral.Core.Models;

namespace Dynamics365BusinessCentral.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
