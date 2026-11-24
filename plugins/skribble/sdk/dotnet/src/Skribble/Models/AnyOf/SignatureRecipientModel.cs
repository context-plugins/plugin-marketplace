using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Skribble.Core.Extensions;
using Skribble.Core.Models;

namespace Skribble.Models.AnyOf;

/// <summary>
/// Defines a signature recipient which can either be an individual signer or a group signer.
/// <list type="bullet">
///   <item><description>For individual signers, account_email and/or signer_identity_data can optionally be provided.</description></item>
///   <item><description>For group signers, signer_group_id must be provided and account_email/signer_identity_data must not be used.</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(SignatureRecipientModelConverter))]
public record SignatureRecipientModel
{
    private readonly Optional<UserSigner> _userSignerValue;

    private readonly Optional<GroupSigner> _groupSignerValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SignatureRecipientModel(Optional<UserSigner> userSignerValue,
        Optional<GroupSigner> groupSignerValue,
        Optional<UnknownArm> unknownValue)
    {
        _userSignerValue = userSignerValue;
        _groupSignerValue = groupSignerValue;
        _unknownValue = unknownValue;
    }

    public static SignatureRecipientModel UserSigner(UserSigner value) =>
        new(Optional<UserSigner>.Some(value), default, default);

    public static SignatureRecipientModel GroupSigner(GroupSigner value) =>
        new(default, Optional<GroupSigner>.Some(value), default);

    internal static SignatureRecipientModel Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUserSigner([NotNullWhen(true)] out UserSigner? value) => _userSignerValue.TryGetValue(out value);

    public bool TryGetGroupSigner([NotNullWhen(true)] out GroupSigner? value) =>
        _groupSignerValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SignatureRecipientModel(UserSigner value) => UserSigner(value);

    public static implicit operator SignatureRecipientModel(GroupSigner value) => GroupSigner(value);

    public TResult Match<TResult>(Func<UserSigner, TResult> onUserSigner,
        Func<GroupSigner, TResult> onGroupSigner,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUserSigner(out var userSignerValue) => onUserSigner(userSignerValue),
            _ when TryGetGroupSigner(out var groupSignerValue) => onGroupSigner(groupSignerValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SignatureRecipientModel)} holds no value.")
        };

    public void Match(Action<UserSigner> onUserSigner, Action<GroupSigner> onGroupSigner, Action<JsonElement> otherwise)
    {
        if (TryGetUserSigner(out var userSignerValue)) onUserSigner(userSignerValue);
        else if (TryGetGroupSigner(out var groupSignerValue)) onGroupSigner(groupSignerValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SignatureRecipientModel)} holds no value.");
    }
}

file sealed class SignatureRecipientModelConverter : JsonConverter<SignatureRecipientModel>
{
    public override SignatureRecipientModel Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<UserSigner>(root, options, out var userSignerValue))
        {
            return SignatureRecipientModel.UserSigner(userSignerValue);
        }
        if (JsonSerializer.TryDeserialize<GroupSigner>(root, options, out var groupSignerValue))
        {
            return SignatureRecipientModel.GroupSigner(groupSignerValue);
        }
        return SignatureRecipientModel.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SignatureRecipientModel value, JsonSerializerOptions options)
    {
        if (value.TryGetUserSigner(out var userSignerValue))
        {
            JsonSerializer.Serialize(writer, userSignerValue, options);
        }
        else if (value.TryGetGroupSigner(out var groupSignerValue))
        {
            JsonSerializer.Serialize(writer, groupSignerValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SignatureRecipientModel)} contains no valid value to serialize.");
        }
    }
}
