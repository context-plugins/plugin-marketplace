using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using SalesforceServiceCloud.Core.Extensions;
using SalesforceServiceCloud.Core.Models;

namespace SalesforceServiceCloud.Models.AnyOf;

[JsonConverter(typeof(VariableConverter))]
public record Variable
{
    private readonly Optional<BooleanVariable> _booleanVariableValue;

    private readonly Optional<DateVariable> _dateVariableValue;

    private readonly Optional<DateTimeVariable> _dateTimeVariableValue;

    private readonly Optional<MoneyVariable> _moneyVariableValue;

    private readonly Optional<NumberVariable> _numberVariableValue;

    private readonly Optional<TextVariable> _textVariableValue;

    private readonly Optional<ObjectVariable> _objectVariableValue;

    private readonly Optional<RefVariable> _refVariableValue;

    private readonly Optional<ListVariable> _listVariableValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Variable(Optional<BooleanVariable> booleanVariableValue,
        Optional<DateVariable> dateVariableValue,
        Optional<DateTimeVariable> dateTimeVariableValue,
        Optional<MoneyVariable> moneyVariableValue,
        Optional<NumberVariable> numberVariableValue,
        Optional<TextVariable> textVariableValue,
        Optional<ObjectVariable> objectVariableValue,
        Optional<RefVariable> refVariableValue,
        Optional<ListVariable> listVariableValue,
        Optional<UnknownArm> unknownValue)
    {
        _booleanVariableValue = booleanVariableValue;
        _dateVariableValue = dateVariableValue;
        _dateTimeVariableValue = dateTimeVariableValue;
        _moneyVariableValue = moneyVariableValue;
        _numberVariableValue = numberVariableValue;
        _textVariableValue = textVariableValue;
        _objectVariableValue = objectVariableValue;
        _refVariableValue = refVariableValue;
        _listVariableValue = listVariableValue;
        _unknownValue = unknownValue;
    }

    public static Variable BooleanVariable(BooleanVariable value) =>
        new(
            Optional<BooleanVariable>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static Variable DateVariable(DateVariable value) =>
        new(
            default,
            Optional<DateVariable>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static Variable DateTimeVariable(DateTimeVariable value) =>
        new(
            default,
            default,
            Optional<DateTimeVariable>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static Variable MoneyVariable(MoneyVariable value) =>
        new(
            default,
            default,
            default,
            Optional<MoneyVariable>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    public static Variable NumberVariable(NumberVariable value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<NumberVariable>.Some(value),
            default,
            default,
            default,
            default,
            default);

    public static Variable TextVariable(TextVariable value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<TextVariable>.Some(value),
            default,
            default,
            default,
            default);

    public static Variable ObjectVariable(ObjectVariable value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ObjectVariable>.Some(value),
            default,
            default,
            default);

    public static Variable RefVariable(RefVariable value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<RefVariable>.Some(value),
            default,
            default);

    public static Variable ListVariable(ListVariable value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ListVariable>.Some(value),
            default);

    internal static Variable Unknown(JsonElement value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetBooleanVariable([NotNullWhen(true)] out BooleanVariable? value) =>
        _booleanVariableValue.TryGetValue(out value);

    public bool TryGetDateVariable([NotNullWhen(true)] out DateVariable? value) =>
        _dateVariableValue.TryGetValue(out value);

    public bool TryGetDateTimeVariable([NotNullWhen(true)] out DateTimeVariable? value) =>
        _dateTimeVariableValue.TryGetValue(out value);

    public bool TryGetMoneyVariable([NotNullWhen(true)] out MoneyVariable? value) =>
        _moneyVariableValue.TryGetValue(out value);

    public bool TryGetNumberVariable([NotNullWhen(true)] out NumberVariable? value) =>
        _numberVariableValue.TryGetValue(out value);

    public bool TryGetTextVariable([NotNullWhen(true)] out TextVariable? value) =>
        _textVariableValue.TryGetValue(out value);

    public bool TryGetObjectVariable([NotNullWhen(true)] out ObjectVariable? value) =>
        _objectVariableValue.TryGetValue(out value);

    public bool TryGetRefVariable([NotNullWhen(true)] out RefVariable? value) =>
        _refVariableValue.TryGetValue(out value);

    public bool TryGetListVariable([NotNullWhen(true)] out ListVariable? value) =>
        _listVariableValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Variable(BooleanVariable value) => BooleanVariable(value);

    public static implicit operator Variable(DateVariable value) => DateVariable(value);

    public static implicit operator Variable(DateTimeVariable value) => DateTimeVariable(value);

    public static implicit operator Variable(MoneyVariable value) => MoneyVariable(value);

    public static implicit operator Variable(NumberVariable value) => NumberVariable(value);

    public static implicit operator Variable(TextVariable value) => TextVariable(value);

    public static implicit operator Variable(ObjectVariable value) => ObjectVariable(value);

    public static implicit operator Variable(RefVariable value) => RefVariable(value);

    public static implicit operator Variable(ListVariable value) => ListVariable(value);

    public TResult Match<TResult>(Func<BooleanVariable, TResult> onBooleanVariable,
        Func<DateVariable, TResult> onDateVariable,
        Func<DateTimeVariable, TResult> onDateTimeVariable,
        Func<MoneyVariable, TResult> onMoneyVariable,
        Func<NumberVariable, TResult> onNumberVariable,
        Func<TextVariable, TResult> onTextVariable,
        Func<ObjectVariable, TResult> onObjectVariable,
        Func<RefVariable, TResult> onRefVariable,
        Func<ListVariable, TResult> onListVariable,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBooleanVariable(out var booleanVariableValue) => onBooleanVariable(booleanVariableValue),
            _ when TryGetDateVariable(out var dateVariableValue) => onDateVariable(dateVariableValue),
            _ when TryGetDateTimeVariable(out var dateTimeVariableValue) => onDateTimeVariable(dateTimeVariableValue),
            _ when TryGetMoneyVariable(out var moneyVariableValue) => onMoneyVariable(moneyVariableValue),
            _ when TryGetNumberVariable(out var numberVariableValue) => onNumberVariable(numberVariableValue),
            _ when TryGetTextVariable(out var textVariableValue) => onTextVariable(textVariableValue),
            _ when TryGetObjectVariable(out var objectVariableValue) => onObjectVariable(objectVariableValue),
            _ when TryGetRefVariable(out var refVariableValue) => onRefVariable(refVariableValue),
            _ when TryGetListVariable(out var listVariableValue) => onListVariable(listVariableValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Variable)} holds no value.")
        };

    public void Match(Action<BooleanVariable> onBooleanVariable,
        Action<DateVariable> onDateVariable,
        Action<DateTimeVariable> onDateTimeVariable,
        Action<MoneyVariable> onMoneyVariable,
        Action<NumberVariable> onNumberVariable,
        Action<TextVariable> onTextVariable,
        Action<ObjectVariable> onObjectVariable,
        Action<RefVariable> onRefVariable,
        Action<ListVariable> onListVariable,
        Action<JsonElement> otherwise)
    {
        if (TryGetBooleanVariable(out var booleanVariableValue)) onBooleanVariable(booleanVariableValue);
        else if (TryGetDateVariable(out var dateVariableValue)) onDateVariable(dateVariableValue);
        else if (TryGetDateTimeVariable(out var dateTimeVariableValue)) onDateTimeVariable(dateTimeVariableValue);
        else if (TryGetMoneyVariable(out var moneyVariableValue)) onMoneyVariable(moneyVariableValue);
        else if (TryGetNumberVariable(out var numberVariableValue)) onNumberVariable(numberVariableValue);
        else if (TryGetTextVariable(out var textVariableValue)) onTextVariable(textVariableValue);
        else if (TryGetObjectVariable(out var objectVariableValue)) onObjectVariable(objectVariableValue);
        else if (TryGetRefVariable(out var refVariableValue)) onRefVariable(refVariableValue);
        else if (TryGetListVariable(out var listVariableValue)) onListVariable(listVariableValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Variable)} holds no value.");
    }
}

file sealed class VariableConverter : JsonConverter<Variable>
{
    public override Variable Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<BooleanVariable>(root, options, out var booleanVariableValue))
        {
            return Variable.BooleanVariable(booleanVariableValue);
        }
        if (JsonSerializer.TryDeserialize<DateVariable>(root, options, out var dateVariableValue))
        {
            return Variable.DateVariable(dateVariableValue);
        }
        if (JsonSerializer.TryDeserialize<DateTimeVariable>(root, options, out var dateTimeVariableValue))
        {
            return Variable.DateTimeVariable(dateTimeVariableValue);
        }
        if (JsonSerializer.TryDeserialize<MoneyVariable>(root, options, out var moneyVariableValue))
        {
            return Variable.MoneyVariable(moneyVariableValue);
        }
        if (JsonSerializer.TryDeserialize<NumberVariable>(root, options, out var numberVariableValue))
        {
            return Variable.NumberVariable(numberVariableValue);
        }
        if (JsonSerializer.TryDeserialize<TextVariable>(root, options, out var textVariableValue))
        {
            return Variable.TextVariable(textVariableValue);
        }
        if (JsonSerializer.TryDeserialize<ObjectVariable>(root, options, out var objectVariableValue))
        {
            return Variable.ObjectVariable(objectVariableValue);
        }
        if (JsonSerializer.TryDeserialize<RefVariable>(root, options, out var refVariableValue))
        {
            return Variable.RefVariable(refVariableValue);
        }
        if (JsonSerializer.TryDeserialize<ListVariable>(root, options, out var listVariableValue))
        {
            return Variable.ListVariable(listVariableValue);
        }
        return Variable.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Variable value, JsonSerializerOptions options)
    {
        if (value.TryGetBooleanVariable(out var booleanVariableValue))
        {
            JsonSerializer.Serialize(writer, booleanVariableValue, options);
        }
        else if (value.TryGetDateVariable(out var dateVariableValue))
        {
            JsonSerializer.Serialize(writer, dateVariableValue, options);
        }
        else if (value.TryGetDateTimeVariable(out var dateTimeVariableValue))
        {
            JsonSerializer.Serialize(writer, dateTimeVariableValue, options);
        }
        else if (value.TryGetMoneyVariable(out var moneyVariableValue))
        {
            JsonSerializer.Serialize(writer, moneyVariableValue, options);
        }
        else if (value.TryGetNumberVariable(out var numberVariableValue))
        {
            JsonSerializer.Serialize(writer, numberVariableValue, options);
        }
        else if (value.TryGetTextVariable(out var textVariableValue))
        {
            JsonSerializer.Serialize(writer, textVariableValue, options);
        }
        else if (value.TryGetObjectVariable(out var objectVariableValue))
        {
            JsonSerializer.Serialize(writer, objectVariableValue, options);
        }
        else if (value.TryGetRefVariable(out var refVariableValue))
        {
            JsonSerializer.Serialize(writer, refVariableValue, options);
        }
        else if (value.TryGetListVariable(out var listVariableValue))
        {
            JsonSerializer.Serialize(writer, listVariableValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Variable)} contains no valid value to serialize.");
        }
    }
}
