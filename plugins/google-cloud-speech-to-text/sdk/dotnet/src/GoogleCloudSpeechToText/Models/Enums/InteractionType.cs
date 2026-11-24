using System;
using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Enum;

namespace GoogleCloudSpeechToText.Models.Enums;

/// <summary>
/// The use case most closely describing the audio content to be recognized.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InteractionType>))]
public sealed record InteractionType : OpenStringEnum<InteractionType>
{
    private InteractionType(string value) : base(value)
    {
    }

    public static readonly InteractionType InteractionTypeUnspecified = new("INTERACTION_TYPE_UNSPECIFIED");

    public static readonly InteractionType Discussion = new("DISCUSSION");

    public static readonly InteractionType Presentation = new("PRESENTATION");

    public static readonly InteractionType PhoneCall = new("PHONE_CALL");

    public static readonly InteractionType Voicemail = new("VOICEMAIL");

    public static readonly InteractionType ProfessionallyProduced = new("PROFESSIONALLY_PRODUCED");

    public static readonly InteractionType VoiceSearch = new("VOICE_SEARCH");

    public static readonly InteractionType VoiceCommand = new("VOICE_COMMAND");

    public static readonly InteractionType Dictation = new("DICTATION");

    public TResult Match<TResult>(Func<TResult> onInteractionTypeUnspecified,
        Func<TResult> onDiscussion,
        Func<TResult> onPresentation,
        Func<TResult> onPhoneCall,
        Func<TResult> onVoicemail,
        Func<TResult> onProfessionallyProduced,
        Func<TResult> onVoiceSearch,
        Func<TResult> onVoiceCommand,
        Func<TResult> onDictation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InteractionTypeUnspecified => onInteractionTypeUnspecified(),
            _ when this == Discussion => onDiscussion(),
            _ when this == Presentation => onPresentation(),
            _ when this == PhoneCall => onPhoneCall(),
            _ when this == Voicemail => onVoicemail(),
            _ when this == ProfessionallyProduced => onProfessionallyProduced(),
            _ when this == VoiceSearch => onVoiceSearch(),
            _ when this == VoiceCommand => onVoiceCommand(),
            _ when this == Dictation => onDictation(),
            _ => otherwise(Value)
        };

    public void Match(Action onInteractionTypeUnspecified,
        Action onDiscussion,
        Action onPresentation,
        Action onPhoneCall,
        Action onVoicemail,
        Action onProfessionallyProduced,
        Action onVoiceSearch,
        Action onVoiceCommand,
        Action onDictation,
        Action<string> otherwise)
    {
        if (this == InteractionTypeUnspecified) onInteractionTypeUnspecified();
        else if (this == Discussion) onDiscussion();
        else if (this == Presentation) onPresentation();
        else if (this == PhoneCall) onPhoneCall();
        else if (this == Voicemail) onVoicemail();
        else if (this == ProfessionallyProduced) onProfessionallyProduced();
        else if (this == VoiceSearch) onVoiceSearch();
        else if (this == VoiceCommand) onVoiceCommand();
        else if (this == Dictation) onDictation();
        else otherwise(Value);
    }
}
