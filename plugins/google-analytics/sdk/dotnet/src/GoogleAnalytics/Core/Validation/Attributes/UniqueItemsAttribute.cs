using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json;

namespace GoogleAnalytics.Core.Validation.Attributes;

[AttributeUsage(AttributeTargets.Property | AttributeTargets.Field)]
public sealed class UniqueItemsAttribute : ValidationAttribute
{
    public override bool IsValid(object? value) =>
        value is null or string || value is not IEnumerable items || AreItemsUnique(items);

    private static bool AreItemsUnique(IEnumerable items)
    {
        try
        {
            HashSet<string> seen = [];
            return items.Cast<object?>().All(item => seen.Add(ToCanonicalJson(item)));
        }
        catch (Exception exception) when (exception is JsonException or NotSupportedException)
        {
            return false;
        }
    }

    private static string ToCanonicalJson(object? item) =>
        item is null ? "null" : JsonSerializer.Serialize(item, item.GetType());
}
