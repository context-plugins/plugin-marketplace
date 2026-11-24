using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Indicates where the specified transcription output is stored. If the value is CUSTOMER_BUCKET, the location is the Amazon S3 bucket you specified using the OutputBucketName parameter in your request. If you also included OutputKey in your request, your output is located in the path you specified in your request. If the value is SERVICE_BUCKET, the location is a service-managed Amazon S3 bucket. To access a transcript stored in a service-managed bucket, use the URI shown in the TranscriptFileUri or RedactedTranscriptFileUri field.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OutputLocationTypeAmazonTranscribeServiceTranscriptionJobsApi>))]
public sealed record OutputLocationTypeAmazonTranscribeServiceTranscriptionJobsApi : OpenStringEnum<OutputLocationTypeAmazonTranscribeServiceTranscriptionJobsApi>
{
    private OutputLocationTypeAmazonTranscribeServiceTranscriptionJobsApi(string value) : base(value)
    {
    }

    public static readonly OutputLocationTypeAmazonTranscribeServiceTranscriptionJobsApi CustomerBucket = new(
        "CUSTOMER_BUCKET");

    public static readonly OutputLocationTypeAmazonTranscribeServiceTranscriptionJobsApi ServiceBucket = new(
        "SERVICE_BUCKET");

    public TResult Match<TResult>(Func<TResult> onCustomerBucket,
        Func<TResult> onServiceBucket,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CustomerBucket => onCustomerBucket(),
            _ when this == ServiceBucket => onServiceBucket(),
            _ => otherwise(Value)
        };

    public void Match(Action onCustomerBucket, Action onServiceBucket, Action<string> otherwise)
    {
        if (this == CustomerBucket) onCustomerBucket();
        else if (this == ServiceBucket) onServiceBucket();
        else otherwise(Value);
    }
}
