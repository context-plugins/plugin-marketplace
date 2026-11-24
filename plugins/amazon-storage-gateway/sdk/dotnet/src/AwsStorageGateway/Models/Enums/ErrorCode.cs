using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

/// <summary>
/// Additional information about the error.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ErrorCode>))]
public sealed record ErrorCode : OpenStringEnum<ErrorCode>
{
    private ErrorCode(string value) : base(value)
    {
    }

    public static readonly ErrorCode ActivationKeyExpired = new("ActivationKeyExpired");

    public static readonly ErrorCode ActivationKeyInvalid = new("ActivationKeyInvalid");

    public static readonly ErrorCode ActivationKeyNotFound = new("ActivationKeyNotFound");

    public static readonly ErrorCode GatewayInternalError = new("GatewayInternalError");

    public static readonly ErrorCode GatewayNotConnected = new("GatewayNotConnected");

    public static readonly ErrorCode GatewayNotFound = new("GatewayNotFound");

    public static readonly ErrorCode GatewayProxyNetworkConnectionBusy = new("GatewayProxyNetworkConnectionBusy");

    public static readonly ErrorCode AuthenticationFailure = new("AuthenticationFailure");

    public static readonly ErrorCode BandwidthThrottleScheduleNotFound = new("BandwidthThrottleScheduleNotFound");

    public static readonly ErrorCode Blocked = new("Blocked");

    public static readonly ErrorCode CannotExportSnapshot = new("CannotExportSnapshot");

    public static readonly ErrorCode ChapCredentialNotFound = new("ChapCredentialNotFound");

    public static readonly ErrorCode DiskAlreadyAllocated = new("DiskAlreadyAllocated");

    public static readonly ErrorCode DiskDoesNotExist = new("DiskDoesNotExist");

    public static readonly ErrorCode DiskSizeGreaterThanVolumeMaxSize = new("DiskSizeGreaterThanVolumeMaxSize");

    public static readonly ErrorCode DiskSizeLessThanVolumeSize = new("DiskSizeLessThanVolumeSize");

    public static readonly ErrorCode DiskSizeNotGigAligned = new("DiskSizeNotGigAligned");

    public static readonly ErrorCode DuplicateCertificateInfo = new("DuplicateCertificateInfo");

    public static readonly ErrorCode DuplicateSchedule = new("DuplicateSchedule");

    public static readonly ErrorCode EndpointNotFound = new("EndpointNotFound");

    public static readonly ErrorCode IamNotSupported = new("IAMNotSupported");

    public static readonly ErrorCode InitiatorInvalid = new("InitiatorInvalid");

    public static readonly ErrorCode InitiatorNotFound = new("InitiatorNotFound");

    public static readonly ErrorCode InternalError = new("InternalError");

    public static readonly ErrorCode InvalidGateway = new("InvalidGateway");

    public static readonly ErrorCode InvalidEndpoint = new("InvalidEndpoint");

    public static readonly ErrorCode InvalidParameters = new("InvalidParameters");

    public static readonly ErrorCode InvalidSchedule = new("InvalidSchedule");

    public static readonly ErrorCode LocalStorageLimitExceeded = new("LocalStorageLimitExceeded");

    public static readonly ErrorCode LunAlreadyAllocated = new("LunAlreadyAllocated");

    public static readonly ErrorCode LunInvalid = new("LunInvalid");

    public static readonly ErrorCode JoinDomainInProgress = new("JoinDomainInProgress");

    public static readonly ErrorCode MaximumContentLengthExceeded = new("MaximumContentLengthExceeded");

    public static readonly ErrorCode MaximumTapeCartridgeCountExceeded = new("MaximumTapeCartridgeCountExceeded");

    public static readonly ErrorCode MaximumVolumeCountExceeded = new("MaximumVolumeCountExceeded");

    public static readonly ErrorCode NetworkConfigurationChanged = new("NetworkConfigurationChanged");

    public static readonly ErrorCode NoDisksAvailable = new("NoDisksAvailable");

    public static readonly ErrorCode NotImplemented = new("NotImplemented");

    public static readonly ErrorCode NotSupported = new("NotSupported");

    public static readonly ErrorCode OperationAborted = new("OperationAborted");

    public static readonly ErrorCode OutdatedGateway = new("OutdatedGateway");

    public static readonly ErrorCode ParametersNotImplemented = new("ParametersNotImplemented");

    public static readonly ErrorCode RegionInvalid = new("RegionInvalid");

    public static readonly ErrorCode RequestTimeout = new("RequestTimeout");

    public static readonly ErrorCode ServiceUnavailable = new("ServiceUnavailable");

    public static readonly ErrorCode SnapshotDeleted = new("SnapshotDeleted");

    public static readonly ErrorCode SnapshotIdInvalid = new("SnapshotIdInvalid");

    public static readonly ErrorCode SnapshotInProgress = new("SnapshotInProgress");

    public static readonly ErrorCode SnapshotNotFound = new("SnapshotNotFound");

    public static readonly ErrorCode SnapshotScheduleNotFound = new("SnapshotScheduleNotFound");

    public static readonly ErrorCode StagingAreaFull = new("StagingAreaFull");

    public static readonly ErrorCode StorageFailure = new("StorageFailure");

    public static readonly ErrorCode TapeCartridgeNotFound = new("TapeCartridgeNotFound");

    public static readonly ErrorCode TargetAlreadyExists = new("TargetAlreadyExists");

    public static readonly ErrorCode TargetInvalid = new("TargetInvalid");

    public static readonly ErrorCode TargetNotFound = new("TargetNotFound");

    public static readonly ErrorCode UnauthorizedOperation = new("UnauthorizedOperation");

    public static readonly ErrorCode VolumeAlreadyExists = new("VolumeAlreadyExists");

    public static readonly ErrorCode VolumeIdInvalid = new("VolumeIdInvalid");

    public static readonly ErrorCode VolumeInUse = new("VolumeInUse");

    public static readonly ErrorCode VolumeNotFound = new("VolumeNotFound");

    public static readonly ErrorCode VolumeNotReady = new("VolumeNotReady");

    public TResult Match<TResult>(Func<TResult> onActivationKeyExpired,
        Func<TResult> onActivationKeyInvalid,
        Func<TResult> onActivationKeyNotFound,
        Func<TResult> onGatewayInternalError,
        Func<TResult> onGatewayNotConnected,
        Func<TResult> onGatewayNotFound,
        Func<TResult> onGatewayProxyNetworkConnectionBusy,
        Func<TResult> onAuthenticationFailure,
        Func<TResult> onBandwidthThrottleScheduleNotFound,
        Func<TResult> onBlocked,
        Func<TResult> onCannotExportSnapshot,
        Func<TResult> onChapCredentialNotFound,
        Func<TResult> onDiskAlreadyAllocated,
        Func<TResult> onDiskDoesNotExist,
        Func<TResult> onDiskSizeGreaterThanVolumeMaxSize,
        Func<TResult> onDiskSizeLessThanVolumeSize,
        Func<TResult> onDiskSizeNotGigAligned,
        Func<TResult> onDuplicateCertificateInfo,
        Func<TResult> onDuplicateSchedule,
        Func<TResult> onEndpointNotFound,
        Func<TResult> onIamNotSupported,
        Func<TResult> onInitiatorInvalid,
        Func<TResult> onInitiatorNotFound,
        Func<TResult> onInternalError,
        Func<TResult> onInvalidGateway,
        Func<TResult> onInvalidEndpoint,
        Func<TResult> onInvalidParameters,
        Func<TResult> onInvalidSchedule,
        Func<TResult> onLocalStorageLimitExceeded,
        Func<TResult> onLunAlreadyAllocated,
        Func<TResult> onLunInvalid,
        Func<TResult> onJoinDomainInProgress,
        Func<TResult> onMaximumContentLengthExceeded,
        Func<TResult> onMaximumTapeCartridgeCountExceeded,
        Func<TResult> onMaximumVolumeCountExceeded,
        Func<TResult> onNetworkConfigurationChanged,
        Func<TResult> onNoDisksAvailable,
        Func<TResult> onNotImplemented,
        Func<TResult> onNotSupported,
        Func<TResult> onOperationAborted,
        Func<TResult> onOutdatedGateway,
        Func<TResult> onParametersNotImplemented,
        Func<TResult> onRegionInvalid,
        Func<TResult> onRequestTimeout,
        Func<TResult> onServiceUnavailable,
        Func<TResult> onSnapshotDeleted,
        Func<TResult> onSnapshotIdInvalid,
        Func<TResult> onSnapshotInProgress,
        Func<TResult> onSnapshotNotFound,
        Func<TResult> onSnapshotScheduleNotFound,
        Func<TResult> onStagingAreaFull,
        Func<TResult> onStorageFailure,
        Func<TResult> onTapeCartridgeNotFound,
        Func<TResult> onTargetAlreadyExists,
        Func<TResult> onTargetInvalid,
        Func<TResult> onTargetNotFound,
        Func<TResult> onUnauthorizedOperation,
        Func<TResult> onVolumeAlreadyExists,
        Func<TResult> onVolumeIdInvalid,
        Func<TResult> onVolumeInUse,
        Func<TResult> onVolumeNotFound,
        Func<TResult> onVolumeNotReady,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ActivationKeyExpired => onActivationKeyExpired(),
            _ when this == ActivationKeyInvalid => onActivationKeyInvalid(),
            _ when this == ActivationKeyNotFound => onActivationKeyNotFound(),
            _ when this == GatewayInternalError => onGatewayInternalError(),
            _ when this == GatewayNotConnected => onGatewayNotConnected(),
            _ when this == GatewayNotFound => onGatewayNotFound(),
            _ when this == GatewayProxyNetworkConnectionBusy => onGatewayProxyNetworkConnectionBusy(),
            _ when this == AuthenticationFailure => onAuthenticationFailure(),
            _ when this == BandwidthThrottleScheduleNotFound => onBandwidthThrottleScheduleNotFound(),
            _ when this == Blocked => onBlocked(),
            _ when this == CannotExportSnapshot => onCannotExportSnapshot(),
            _ when this == ChapCredentialNotFound => onChapCredentialNotFound(),
            _ when this == DiskAlreadyAllocated => onDiskAlreadyAllocated(),
            _ when this == DiskDoesNotExist => onDiskDoesNotExist(),
            _ when this == DiskSizeGreaterThanVolumeMaxSize => onDiskSizeGreaterThanVolumeMaxSize(),
            _ when this == DiskSizeLessThanVolumeSize => onDiskSizeLessThanVolumeSize(),
            _ when this == DiskSizeNotGigAligned => onDiskSizeNotGigAligned(),
            _ when this == DuplicateCertificateInfo => onDuplicateCertificateInfo(),
            _ when this == DuplicateSchedule => onDuplicateSchedule(),
            _ when this == EndpointNotFound => onEndpointNotFound(),
            _ when this == IamNotSupported => onIamNotSupported(),
            _ when this == InitiatorInvalid => onInitiatorInvalid(),
            _ when this == InitiatorNotFound => onInitiatorNotFound(),
            _ when this == InternalError => onInternalError(),
            _ when this == InvalidGateway => onInvalidGateway(),
            _ when this == InvalidEndpoint => onInvalidEndpoint(),
            _ when this == InvalidParameters => onInvalidParameters(),
            _ when this == InvalidSchedule => onInvalidSchedule(),
            _ when this == LocalStorageLimitExceeded => onLocalStorageLimitExceeded(),
            _ when this == LunAlreadyAllocated => onLunAlreadyAllocated(),
            _ when this == LunInvalid => onLunInvalid(),
            _ when this == JoinDomainInProgress => onJoinDomainInProgress(),
            _ when this == MaximumContentLengthExceeded => onMaximumContentLengthExceeded(),
            _ when this == MaximumTapeCartridgeCountExceeded => onMaximumTapeCartridgeCountExceeded(),
            _ when this == MaximumVolumeCountExceeded => onMaximumVolumeCountExceeded(),
            _ when this == NetworkConfigurationChanged => onNetworkConfigurationChanged(),
            _ when this == NoDisksAvailable => onNoDisksAvailable(),
            _ when this == NotImplemented => onNotImplemented(),
            _ when this == NotSupported => onNotSupported(),
            _ when this == OperationAborted => onOperationAborted(),
            _ when this == OutdatedGateway => onOutdatedGateway(),
            _ when this == ParametersNotImplemented => onParametersNotImplemented(),
            _ when this == RegionInvalid => onRegionInvalid(),
            _ when this == RequestTimeout => onRequestTimeout(),
            _ when this == ServiceUnavailable => onServiceUnavailable(),
            _ when this == SnapshotDeleted => onSnapshotDeleted(),
            _ when this == SnapshotIdInvalid => onSnapshotIdInvalid(),
            _ when this == SnapshotInProgress => onSnapshotInProgress(),
            _ when this == SnapshotNotFound => onSnapshotNotFound(),
            _ when this == SnapshotScheduleNotFound => onSnapshotScheduleNotFound(),
            _ when this == StagingAreaFull => onStagingAreaFull(),
            _ when this == StorageFailure => onStorageFailure(),
            _ when this == TapeCartridgeNotFound => onTapeCartridgeNotFound(),
            _ when this == TargetAlreadyExists => onTargetAlreadyExists(),
            _ when this == TargetInvalid => onTargetInvalid(),
            _ when this == TargetNotFound => onTargetNotFound(),
            _ when this == UnauthorizedOperation => onUnauthorizedOperation(),
            _ when this == VolumeAlreadyExists => onVolumeAlreadyExists(),
            _ when this == VolumeIdInvalid => onVolumeIdInvalid(),
            _ when this == VolumeInUse => onVolumeInUse(),
            _ when this == VolumeNotFound => onVolumeNotFound(),
            _ when this == VolumeNotReady => onVolumeNotReady(),
            _ => otherwise(Value)
        };

    public void Match(Action onActivationKeyExpired,
        Action onActivationKeyInvalid,
        Action onActivationKeyNotFound,
        Action onGatewayInternalError,
        Action onGatewayNotConnected,
        Action onGatewayNotFound,
        Action onGatewayProxyNetworkConnectionBusy,
        Action onAuthenticationFailure,
        Action onBandwidthThrottleScheduleNotFound,
        Action onBlocked,
        Action onCannotExportSnapshot,
        Action onChapCredentialNotFound,
        Action onDiskAlreadyAllocated,
        Action onDiskDoesNotExist,
        Action onDiskSizeGreaterThanVolumeMaxSize,
        Action onDiskSizeLessThanVolumeSize,
        Action onDiskSizeNotGigAligned,
        Action onDuplicateCertificateInfo,
        Action onDuplicateSchedule,
        Action onEndpointNotFound,
        Action onIamNotSupported,
        Action onInitiatorInvalid,
        Action onInitiatorNotFound,
        Action onInternalError,
        Action onInvalidGateway,
        Action onInvalidEndpoint,
        Action onInvalidParameters,
        Action onInvalidSchedule,
        Action onLocalStorageLimitExceeded,
        Action onLunAlreadyAllocated,
        Action onLunInvalid,
        Action onJoinDomainInProgress,
        Action onMaximumContentLengthExceeded,
        Action onMaximumTapeCartridgeCountExceeded,
        Action onMaximumVolumeCountExceeded,
        Action onNetworkConfigurationChanged,
        Action onNoDisksAvailable,
        Action onNotImplemented,
        Action onNotSupported,
        Action onOperationAborted,
        Action onOutdatedGateway,
        Action onParametersNotImplemented,
        Action onRegionInvalid,
        Action onRequestTimeout,
        Action onServiceUnavailable,
        Action onSnapshotDeleted,
        Action onSnapshotIdInvalid,
        Action onSnapshotInProgress,
        Action onSnapshotNotFound,
        Action onSnapshotScheduleNotFound,
        Action onStagingAreaFull,
        Action onStorageFailure,
        Action onTapeCartridgeNotFound,
        Action onTargetAlreadyExists,
        Action onTargetInvalid,
        Action onTargetNotFound,
        Action onUnauthorizedOperation,
        Action onVolumeAlreadyExists,
        Action onVolumeIdInvalid,
        Action onVolumeInUse,
        Action onVolumeNotFound,
        Action onVolumeNotReady,
        Action<string> otherwise)
    {
        if (this == ActivationKeyExpired) onActivationKeyExpired();
        else if (this == ActivationKeyInvalid) onActivationKeyInvalid();
        else if (this == ActivationKeyNotFound) onActivationKeyNotFound();
        else if (this == GatewayInternalError) onGatewayInternalError();
        else if (this == GatewayNotConnected) onGatewayNotConnected();
        else if (this == GatewayNotFound) onGatewayNotFound();
        else if (this == GatewayProxyNetworkConnectionBusy) onGatewayProxyNetworkConnectionBusy();
        else if (this == AuthenticationFailure) onAuthenticationFailure();
        else if (this == BandwidthThrottleScheduleNotFound) onBandwidthThrottleScheduleNotFound();
        else if (this == Blocked) onBlocked();
        else if (this == CannotExportSnapshot) onCannotExportSnapshot();
        else if (this == ChapCredentialNotFound) onChapCredentialNotFound();
        else if (this == DiskAlreadyAllocated) onDiskAlreadyAllocated();
        else if (this == DiskDoesNotExist) onDiskDoesNotExist();
        else if (this == DiskSizeGreaterThanVolumeMaxSize) onDiskSizeGreaterThanVolumeMaxSize();
        else if (this == DiskSizeLessThanVolumeSize) onDiskSizeLessThanVolumeSize();
        else if (this == DiskSizeNotGigAligned) onDiskSizeNotGigAligned();
        else if (this == DuplicateCertificateInfo) onDuplicateCertificateInfo();
        else if (this == DuplicateSchedule) onDuplicateSchedule();
        else if (this == EndpointNotFound) onEndpointNotFound();
        else if (this == IamNotSupported) onIamNotSupported();
        else if (this == InitiatorInvalid) onInitiatorInvalid();
        else if (this == InitiatorNotFound) onInitiatorNotFound();
        else if (this == InternalError) onInternalError();
        else if (this == InvalidGateway) onInvalidGateway();
        else if (this == InvalidEndpoint) onInvalidEndpoint();
        else if (this == InvalidParameters) onInvalidParameters();
        else if (this == InvalidSchedule) onInvalidSchedule();
        else if (this == LocalStorageLimitExceeded) onLocalStorageLimitExceeded();
        else if (this == LunAlreadyAllocated) onLunAlreadyAllocated();
        else if (this == LunInvalid) onLunInvalid();
        else if (this == JoinDomainInProgress) onJoinDomainInProgress();
        else if (this == MaximumContentLengthExceeded) onMaximumContentLengthExceeded();
        else if (this == MaximumTapeCartridgeCountExceeded) onMaximumTapeCartridgeCountExceeded();
        else if (this == MaximumVolumeCountExceeded) onMaximumVolumeCountExceeded();
        else if (this == NetworkConfigurationChanged) onNetworkConfigurationChanged();
        else if (this == NoDisksAvailable) onNoDisksAvailable();
        else if (this == NotImplemented) onNotImplemented();
        else if (this == NotSupported) onNotSupported();
        else if (this == OperationAborted) onOperationAborted();
        else if (this == OutdatedGateway) onOutdatedGateway();
        else if (this == ParametersNotImplemented) onParametersNotImplemented();
        else if (this == RegionInvalid) onRegionInvalid();
        else if (this == RequestTimeout) onRequestTimeout();
        else if (this == ServiceUnavailable) onServiceUnavailable();
        else if (this == SnapshotDeleted) onSnapshotDeleted();
        else if (this == SnapshotIdInvalid) onSnapshotIdInvalid();
        else if (this == SnapshotInProgress) onSnapshotInProgress();
        else if (this == SnapshotNotFound) onSnapshotNotFound();
        else if (this == SnapshotScheduleNotFound) onSnapshotScheduleNotFound();
        else if (this == StagingAreaFull) onStagingAreaFull();
        else if (this == StorageFailure) onStorageFailure();
        else if (this == TapeCartridgeNotFound) onTapeCartridgeNotFound();
        else if (this == TargetAlreadyExists) onTargetAlreadyExists();
        else if (this == TargetInvalid) onTargetInvalid();
        else if (this == TargetNotFound) onTargetNotFound();
        else if (this == UnauthorizedOperation) onUnauthorizedOperation();
        else if (this == VolumeAlreadyExists) onVolumeAlreadyExists();
        else if (this == VolumeIdInvalid) onVolumeIdInvalid();
        else if (this == VolumeInUse) onVolumeInUse();
        else if (this == VolumeNotFound) onVolumeNotFound();
        else if (this == VolumeNotReady) onVolumeNotReady();
        else otherwise(Value);
    }
}
