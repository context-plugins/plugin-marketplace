using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using FinancialModelingPrep.Core.Hooks;
using FinancialModelingPrep.Core.Models;

namespace FinancialModelingPrep.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
